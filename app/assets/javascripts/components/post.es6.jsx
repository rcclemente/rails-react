class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }
  render () {
    debugger;
    return (
      <div>
        <h2>
          {this.props.post.subject}
        </h2>
        <p>{this.props.post.message}</p>
        <p>{this.props.post.rank}</p>
      </div>

    )
  }
}
