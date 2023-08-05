import { MongoClient, ObjectId } from "mongodb";
function MeetUpDetails(props) {
  return (
    <>
      <img src={props.meetupData.image} alt={props.meetupData.description} />
      <h1>{props.meetupData.title}</h1>
      <address>{props.meetupData.address}</address>
      <p>{props.meetupData.description}</p>
    </>
  );
}

// return(
//   <MeetUpShow meetup={props.meetupData}/>
// )

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ashish8364:Ashish143@cluster0.oovrhrs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://ashish8364:Ashish143@cluster0.oovrhrs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const selectedMeetup = await meetupsCollections.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
export default MeetUpDetails;
