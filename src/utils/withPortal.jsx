import Portal from "../Components/Portal";
// High order component
export default function withPortal(Component) {
  return function PortalComponent(props) {
    return (
      <Portal>
        <Component {...props} />
      </Portal>
    );
  };
}
