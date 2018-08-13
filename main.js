function main() {
    $(".content").hide();
    $(".content-button").on("click", function() {
      $(this).next().slideToggle(400);
      $(this).toggleClass("active");
    });
  }
  
  $(document).ready(main)