export function drawStatusText(context, input, player) {
  context.font = "30px Arial";
  context.fillText("Last input: " + input.lastKey, 120, 150);
  context.fillText("Active state: " + player.currentState.state, 120, 200);
}
