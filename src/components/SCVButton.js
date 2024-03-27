import { Button } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";

export default function SCVButton ({loading, color, children, ...props}){
  return (
    <Button variant="primary" type="submit" {...props} style={{minHeight:33, minWidth:134,display:'flex', alignItems:'center',justifyContent:'center'}} disabled={loading}>
      {loading ? <ThreeDots 
        height={"17"}
        width={"17"}
        color={color || "white"} />: children}
    </Button>
  );
};