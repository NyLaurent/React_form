import Child from "./child";



function receiver() {}

function sender() {}
function parent() {
  const messages = [
    {
      messageBody: "Bonjour",
      time: "16:30 pm",
      component: sender,
    },

    {
      messageBody: "Morning",
      time: "12:09 pm",
      component: receiver,
    },
  ];

  return (
    <div className="App">
      <Child messages={messages} />
    </div>
  );
}
export default parent;

