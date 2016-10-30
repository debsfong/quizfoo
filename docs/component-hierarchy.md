## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**QuizsContainer**
 - QuizsHeader
  * QuizIndex

**QuizbookContainer**
 - QuizbookHeader
  + QuizIndex

**SearchResultsContainer**
 - Search
 - QuizIndex

**TagContainer**
 - QuizbookHeader
  + QuizIndex

**QuizIndex**
 - QuizIndexItem
  + QuizDetail
    + QuizTools
    - QuizbookSearch
    - Tags
      - Tag
    * Quiz

**NewQuizContainer**
 - NewQuiz
  - RTETools
  - NewQuizButton

**Search**

**NewQuizbook**
 - NewQuizbook

**NewTag**
 - NewTag

**QuizbookSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "SplashPage" |
| "/signup" | "AuthFormContainer" |
| "/signin" | "AuthFormContainer" |
| "/teacher/class/:classId" | "ClassesContainer" |
| "/teacher/class/:classId/quiz" | "QuizzesContainer" |
| "/teacher/class/:classId/quiz/:quizId" | "QuizzesContainer" |
| "/home/quizbook/:quizbookId/quiz/:quizId" | "QuizbookContainer" |
| "/home/tag/:tagId/quiz/:quizdId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-quiz" | "NewQuizContainer" |
| "/search" | "Search" |
| "/new-quizbook" | "NewQuizbook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/quizbook-search" | "QuizbookSearch" |
