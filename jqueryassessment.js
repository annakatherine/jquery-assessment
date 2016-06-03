
var clicks = 0;

$(document).ready(function(){
$(console.log('hello from jquery'));
});
//click handler
$('#generateRow').on('click', function(){
  clicks++;
  console.log('generateRow clicked');

// Creates container and gives it class name and and id of row
var newContainer = document.createElement('div');
newContainer.className = 'newContainer';
newContainer.id = 'row' + clicks;

console.log('created newContainer');

//Creates delete button and gives it class and text content
var deleteButton = document.createElement( 'button' );
deleteButton.textContent = 'Delete Me!';
deleteButton.className = 'deleteButtonClass';
//Appends delete button to the container
newContainer.appendChild( deleteButton );
console.log('created delete button');

//creates change button and gives it class and text content
var changeButton = document.createElement('button');
changeButton.textContent = 'change';
changeButton.className = 'change';
//puts it in the container
newContainer.appendChild( changeButton );
console.log('created changeButton');

//captures clicks in new var
var clicksOutput = document.createElement('p');
newContainer.appendChild( clicksOutput );

$('body').append( newContainer );

$(console.log(newContainer));
$('p').text( clicks );
});

//delete button
$(document).on('click', '.deleteButtonClass', function(){
  $(this).parent().remove();
});

//color change button
$(document).on('click', '.change', function(){
//sets parent as variable
  var parent = $(this).parent();

  var parentClass = parent.attr('class');

  if( parentClass == 'red'){

    parent.removeClass().addClass('yellow');
    parent.css({ 'background-color': 'yellow' });
  }
  else {
    parent.removeClass().addClass('red');
    parent.css({ 'background-color': 'red' });
  }
});
