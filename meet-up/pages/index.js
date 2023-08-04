import MeetupList from "@/components/meetups/MeetupList";

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
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps() {
  return {
    props: {
      meetups: dummy,
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
