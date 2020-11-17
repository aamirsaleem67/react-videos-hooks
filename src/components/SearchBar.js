import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="search-bar ui segment">
        <form className="ui form" onSubmit={(e) => this.onSubmit(e)}>
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              onChange={(e) => this.onInputChange(e)}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
