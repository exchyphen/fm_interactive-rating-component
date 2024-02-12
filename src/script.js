const submitButton = document.getElementById("submit-button");
const ratingContainer = document.getElementById("rating-state-container");
const thankYouContainer = document.getElementById("thank-you-container");
const currRating = document.getElementById("final-rating");

const ratings = [];
for (let i = 1; i <= 5; i++) {
  ratings.push(document.getElementById(`rating-${i}`));
}

let highlighted = false;
const highlightRatings = () => {
  for (const rating of ratings) {
    rating.style.border = "1px solid var(--orange)";
  }
  highlighted = true;
};

const submitAction = () => {
  // check if rating is chosen
  if (currRating.textContent === "x") {
    if (!highlighted) {
      highlightRatings();
    }
    return;
  }

  // hide rating
  ratingContainer.style.display = "none";

  // show thank you
  thankYouContainer.style.display = "flex";
};

const selectRating = (num) => {
  // clear current rating
  if (currRating.textContent !== "x") {
    // already chosen
    const currRatingIndex = Number(currRating.textContent) - 1;
    if (currRatingIndex === num) {
      return;
    }

    const currSelected = ratings[currRatingIndex];
    currSelected.style.background = "var(--circle-bg)";
    currSelected.style.color = "var(--light-grey)";
  }

  // remove highlight from false submit
  if (highlighted) {
    for (const rating of ratings) {
      rating.style.border = "none";
    }

    highlighted = false;
  }

  // highlight current rating
  const currSelected = ratings[num];
  currSelected.style.background = "var(--medium-grey)";
  currSelected.style.color = "var(--white)";

  // change rating
  currRating.textContent = String(num + 1);
};

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => selectRating(i));
}

submitButton.addEventListener("click", submitAction);
