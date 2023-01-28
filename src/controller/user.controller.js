const Quiz = require("../model/quiz.model");
const User = require("../model/user.model");

const userDetails = async (req, res) => {
  let { name, category, difficulty, questions } = req.body;

  try {
    let queries = [];
    if (typeof category !== undefined) queries.push({ category });
    if (typeof difficulty !== undefined) queries.push({ difficulty });
    let user = await User.create({ name, category, difficulty, questions });
    if (user) {
      let quiz = await Quiz.find({ $and: queries }).limit(questions);
      res.send(quiz);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const quizScore = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  let user = await User.findOneAndUpdate(
    { name: name },
    {
      $push: { score: { score_id: id } },
    }
  );
  if (user) {
    res.status(200).send({ message: "Score updated successfully", user });
  } else {
    res.send("Score not updated");
  }
};

module.exports = { userDetails, quizScore };
