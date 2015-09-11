function FindAndReplace(input_sentence, target_word, replacement_word) {
  var input_ew = input_sentence.replace(/\W+/g, ' ').toLowerCase().split(" ");

  input_new.forEach(function(word){
      if (word === target_word ){

      }
  });


  return input_new;

}


$(document).ready(function()  {
  $("form#find_and_replace").submit(function(event) {
    var text = ($("input#input_sentence").val());
    var result = FindAndReplace(text);

    $(".find_and_replace").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
