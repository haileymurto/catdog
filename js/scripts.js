$(document).ready(function() {
  $("button#meow").click(function() {
    console.log("clicked");
     $("ul#bark").prepend("<li>Bark!</li>");
  });

  $("button#bark").click(function() {
    $("ul#meow").prepend("<li>Meow!</li>");
  });
});
