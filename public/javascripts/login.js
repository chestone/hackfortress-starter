function submitLogin(data) {
  $.post("/login", data)
    .done((resp) => {
      const { status } = resp;
      console.log({ status });
      if (status === "success") {
        window.location = "/";
      } else {
        document.querySelector("#error-msg").innerText =
          "Error: Could not log you in";
      }
    })
    .fail(() => {
      document.querySelector("#error-msg").innerText =
        "Error: Could not log you in";
    });
}

function attachFormHandlers() {
  $("form").on("submit", (event) => {
    event.preventDefault();
    const values = Array.prototype.slice
      .call(document.querySelector("form").querySelectorAll("input"))
      .map((input) => {
        return {
          name: input.name,
          value: input.value,
        };
      });
    return submitLogin(values);
  });
}

function init() {
  const userInput = $('input[name="username"]');
  userInput.attr("placeholder", "guest");
  attachFormHandlers();
}

init();
