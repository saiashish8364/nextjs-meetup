import { useRouter } from "next/router";
const dummy = [
  {
    id: "m1",
    title: "a first meetup",
    image:
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    address: "taj",
    description: "this is meet 1",
  },
  {
    id: "m2",
    title: "a second meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1676464844981-09762ef89491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    address: "mountain",
    description: "this is 2nd meetup",
  },
  {
    id: "m3",
    title: "a third meetup",
    image:
      "https://plus.unsplash.com/premium_photo-1676464844981-09762ef89491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
    address: "garden",
    description: "this is 3rd meetup",
  },
];
function MeetUpDetails(props) {
  const router = useRouter();
  let id = String(router.query.meetupid);
  console.log(id);
  console.log(props.meetupData);
  let meet = dummy[0];

  for (let i = 0; i < dummy.length; i++) {
    if (String(dummy[i].id) === id) {
      meet = dummy[i];
      break;
    }
  }
  return (
    <>
      <img src={meet.image} alt={meet.description} />
      <h1>{meet.title}</h1>
      <address>{meet.address}</address>
      <p>{meet.description}</p>
    </>
  );
}

// return(
//   <MeetUpShow meetup={props.meetupData}/>
// )

// export async function getStaticPaths() {
//   return {
//     fallback: false, //false if all id's present true if some id's present
//     paths: [
//       {
//         params: {
//           meetupid: "m1",
//         },
//         params: {
//           meetupid: "m2",
//         },
//         params: {
//           meetupid: "m3",
//         },
//       },
//     ],
//   };
// }
// export async function getStaticProps(context) {
//   //  useRouter wont work inside this
//   const meetupid = context.params.meetupid;
//   let data;
//   if (String(meetupid) === "m3") {
//     data = {
//       id: "m3",
//       title: "a third meetup",
//       image:
//         "https://plus.unsplash.com/premium_photo-1676464844981-09762ef89491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
//       address: "garden",
//       description: "this is 3rd meetup",
//     };
//   }
//   if (String(meetupid) === "m2") {
//     data = {
//       id: "m2",
//       title: "a second meetup",
//       image:
//         "https://plus.unsplash.com/premium_photo-1676464844981-09762ef89491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80",
//       address: "mountain",
//       description: "this is 2nd meetup",
//     };
//   }
//   if (String(meetupid) === "m1") {
//     data = {
//       id: "m1",
//       title: "a first meetup",
//       image:
//         "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//       address: "taj",
//       description: "this is meet 1",
//     };
//   }
//   return {
//     props: {
//       meetupData: data,
//     },
//   };
// }
export default MeetUpDetails;
