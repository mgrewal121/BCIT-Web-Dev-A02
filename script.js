document.addEventListener("DOMContentLoaded", () => {
  const heardSelect = document.getElementById("heard-about");
  const extraDetails = document.getElementById("extra-details");

  heardSelect.addEventListener("change", function () {
    const value = this.value;
    if (value === "Magic" || value === "Other") {
      extraDetails.style.display = "block";
    } else {
      extraDetails.style.display = "none";
    }
  });
});
