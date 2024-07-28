export function drawStatusText(context, input, player) {
  context.font = "30px Arial";
  context.fillText("Last input: " + input.lastKey, 100, 150);
  context.fillText("Active state: " + player.currentState.state, 100, 200);
}
