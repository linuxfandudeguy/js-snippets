const startAdventure = () => {
  const choice1 = prompt('You are in a dark forest. Do you go left or right? Type "left" or "right".');
  
  if (choice1 === 'left') {
    const choice2 = prompt('You find a magical pond. Do you drink from it or leave it alone? Type "drink" or "leave".');
    
    if (choice2 === 'drink') {
      alert('The pond grants you eternal wisdom. You win!');
    } else if (choice2 === 'leave') {
      alert('A mysterious creature appears and leads you out of the forest. You safely return home.');
    } else {
      alert('Invalid choice. You wander the forest forever.');
    }
  } else if (choice1 === 'right') {
    const choice2 = prompt('You come across a dragon. Do you fight it or try to befriend it? Type "fight" or "befriend".');
    
    if (choice2 === 'fight') {
      alert('The dragon is too powerful. You are defeated.');
    } else if (choice2 === 'befriend') {
      alert('The dragon becomes your ally and helps you find treasure. You win!');
    } else {
      alert('Invalid choice. The dragon finds you and you are defeated.');
    }
  } else {
    alert('Invalid choice. You are lost in the forest.');
  }
};

startAdventure();
