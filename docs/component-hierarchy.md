## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - Sidebar
  * ClassSearch
  * ClassIndex
    + ClassIndexItem
      - DeleteButton
        * Alert
  * AddClassButton
    + NewClassForm (popup for title)

**ClassContainer**
- Header
- ClassHeaderTools
  * EditClassButton
  * AddStudentsButton
- CreateQuizButton
  * CreateQuizForm (popup for title)
- QuizzesIndex
  * QuizIndexItem

**QuizContainer**
- Header
- QuizHeaderTools
  * BackToClassButton
  * CreateButton
    + CreateSidebar
      - QuizTitle
      - QuestionsIndex
        * QuestionIndexItem
          + TypeInput
          + QuestionInput
          + ChoicesInput
      - AddQuestionButton
    + QuestionsContainer
      - QuestionIndexItem
  * AnalyzeButton
    + QuizTitle
    + SummaryButton
      - QuestionsIndex
      - StudentResponseTable
    + IndividualButton
      - StudentsIndex
      - QuestionResponseTable
  * PreviewQuizButton


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashPage" |
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/class/:classId" | "ClassContainer" |
| "/quiz/:quizId/create" | "QuizContainer" |
| "/quiz/:quizId/analyze" | "QuizContainer" |
