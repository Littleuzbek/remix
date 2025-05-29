import Banner from "./Banner";
import Collection from "./Collection";

export default function Home({data}) {
  return (
    <>
      <Banner />
      <Collection  all={data?.slice(-11, -1)} section={"Top seller"}/>
      <Banner />
      <Collection all={data?.slice(0, 10)} section={"Boshqa mahsulotlar"}/>
      <Banner />
      <Collection all={data?.slice(10, 20)}/>
    </>
  )
}
