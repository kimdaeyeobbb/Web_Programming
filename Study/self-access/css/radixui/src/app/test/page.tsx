import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export default function MyTooltip() {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger>Hover over me</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content>This is a tooltip!</TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
