import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
function HomePage(props) {
  return (
    <>
      <Head>
        <title>Next Meetups</title>
        <meta name="Description" content="Highly active meetups"></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://ashish8364:Ashish143@cluster0.oovrhrs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollections = db.collection("meetups");
  const meetups = await meetupsCollections.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 5,
  };
}
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: dummy,
//     },
//   };
// }
export default HomePage;
