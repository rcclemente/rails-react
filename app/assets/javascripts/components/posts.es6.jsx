class Posts extends React.Component {
  render () {
    return (
      <div>
        {this.props.posts.map(function(x) {
          return(
            <p key={x.id}><a href={"posts/" + x.id}>{x.subject}</a></p>
          )
        })}
      </div>
    )
  }
}
