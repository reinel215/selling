const React = require('react')
const ReactTags = require('react-tag-autocomplete')
 
class App extends React.Component {
  constructor (props) {
    super(props)
 
    this.state = {
      tags: [],
      suggestions: [
        { id: 3, name: "Bananas" },
        { id: 4, name: "Bantina" },
        { id: 5, name: "Mangos" },
        { id: 6, name: "Lemons" },
        { id: 7, name: "Apricots" }
      ]
    }
  }
 
  handleDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }


  handleNew (tag){
    console.log(tag);
  }
 
  render () {
    return (
      <ReactTags
        allowNew
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        handleDelete={this.handleDelete.bind(this)}
        handleAddition={this.handleAddition.bind(this)} />
    )
  }
}
 
export default App;