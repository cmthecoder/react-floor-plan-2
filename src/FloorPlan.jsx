import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <>
      <div><Kitchen/></div>
      <div><LivingRoom/></div>
      <div><Bedroom bedNum='1'/></div>
      <div><Bedroom bedNum='2'/></div>
      <div><Bedroom bedNum='3'/></div>
      <div><Bath size='Full'/></div>
      <div><Bath size='Half'/></div>
    </>
  );
}

export default FloorPlan;