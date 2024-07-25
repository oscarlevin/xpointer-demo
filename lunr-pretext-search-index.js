var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.    The following are just three exercises from the quiz bank file.    What is the answer to question 1?    What is the answer to question 2? (this is in component ws)   Berlin    What is the answer to question 7? (has workspace)   What is the answer to question 8? This also has workspace.    What is the answer to question 4?   What is the answer to question 6?    "
},
{
  "id": "q1",
  "level": "2",
  "url": "sec-section-name.html#q1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " What is the answer to question 1?  "
},
{
  "id": "q2",
  "level": "2",
  "url": "sec-section-name.html#q2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": " What is the answer to question 2? (this is in component ws)   Berlin  "
},
{
  "id": "q7",
  "level": "2",
  "url": "sec-section-name.html#q7",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " What is the answer to question 7? (has workspace)  "
},
{
  "id": "exercises-test-5",
  "level": "2",
  "url": "sec-section-name.html#exercises-test-5",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " What is the answer to question 8? This also has workspace.  "
},
{
  "id": "q4",
  "level": "2",
  "url": "sec-section-name.html#q4",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": " What is the answer to question 4?  "
},
{
  "id": "q6",
  "level": "2",
  "url": "sec-section-name.html#q6",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": " What is the answer to question 6?  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
