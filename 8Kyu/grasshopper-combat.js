// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    // Write your code here
    currHealth = health;
    if(currHealth - damage > 0) {
      currHealth -= damage;
    } else if(currHealth - damage <= 0) {
      currHealth = 0;
    }
    return currHealth
  }

  /* other solutions

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}

const combat = (health, damage) => Math.max(0, health - damage);

  */