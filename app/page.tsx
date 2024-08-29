import VisxGraph, { AreaProps } from "@/components/visxGraph"

const areaProps: AreaProps = {
  width: 500,
  height: 500,
  margin: { top: 20, right: 20, bottom: 20, left: 20 },
}



export default function Page() {
  return <VisxGraph areaProps={areaProps} />
}
