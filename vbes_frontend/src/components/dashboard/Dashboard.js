import React, { Component } from 'react';
import '../../App.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        {' '}
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
              >
                Mail <span className="caret" />
              </button>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="#">Mail</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">Tasks</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-9 col-md-10">
            {/* <!-- Split button --> */}
            <div className="btn-group">
              <button type="button" className="btn btn-default">
                <div className="checkbox" style={{ margin: 0 }}>
                  <label>
                    <input type="checkbox" />
                  </label>
                </div>
              </button>
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                <span className="caret" />
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="#">All</a>
                </li>
                <li>
                  <a href="#">None</a>
                </li>
                <li>
                  <a href="#">Read</a>
                </li>
                <li>
                  <a href="#">Unread</a>
                </li>
                <li>
                  <a href="#">Starred</a>
                </li>
                <li>
                  <a href="#">Unstarred</a>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-default" data-toggle="tooltip" title="Refresh">
              &nbsp;&nbsp;&nbsp;
              <span className="glyphicon glyphicon-refresh" />
              &nbsp;&nbsp;&nbsp;
            </button>
            {/* <!-- Single button --> */}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                More <span className="caret" />
              </button>
              <ul className="dropdown-menu" role="menu">
                <li>
                  <a href="#">Mark all as read</a>
                </li>
                <li className="divider" />
                <li className="text-center">
                  <small className="text-muted">Select messages to see more actions</small>
                </li>
              </ul>
            </div>
            <div className="pull-right">
              <span className="text-muted">
                <b>1</b>–<b>50</b> of <b>160</b>
              </span>
              <div className="btn-group btn-group-sm">
                <button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-chevron-left" />
                </button>
                <button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <a href="#" className="btn btn-danger btn-sm btn-block" role="button">
              <i className="glyphicon glyphicon-edit" /> Compose
            </a>
            <hr />
            <ul className="nav nav-pills nav-stacked">
              <li className="active">
                <a href="#">
                  <span className="badge pull-right">32</span> Inbox{' '}
                </a>
              </li>
              <li>
                <a href="#">Starred</a>
              </li>
              <li>
                <a href="#">Important</a>
              </li>
              <li>
                <a href="#">Sent Mail</a>
              </li>
              <li>
                <a href="#">
                  <span className="badge pull-right">3</span>Drafts
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-9 col-md-10">
            {/* <!-- Nav tabs --> */}
            <ul className="nav nav-tabs">
              <li className="active">
                <a href="#home" data-toggle="tab">
                  <span className="glyphicon glyphicon-inbox" />
                  Primary
                </a>
              </li>
              <li>
                <a href="#profile" data-toggle="tab">
                  <span className="glyphicon glyphicon-user" />
                  Social
                </a>
              </li>
              <li>
                <a href="#messages" data-toggle="tab">
                  <span className="glyphicon glyphicon-tags" />
                  Promotions
                </a>
              </li>
              <li>
                <a href="#settings" data-toggle="tab">
                  <span className="glyphicon glyphicon-plus no-margin" />
                </a>
              </li>
            </ul>
            {/* <!-- Tab panes --> */}
            <div className="tab-content">
              <div className="tab-pane fade in active" id="home">
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                    <span className="glyphicon glyphicon-star-empty" />
                    <span className="name" style={{ minWidth: 120, display: 'inline - block' }}>
                      Mark Otto
                    </span>{' '}
                    <span className="">Nice work on the lastest version</span>
                    <span className="text-muted" style={{ fontSize: 11 }}>
                      - More content here
                    </span>{' '}
                    <span className="badge">12:10 AM</span>{' '}
                    <span className="pull-right">
                      <span className="glyphicon glyphicon-paperclip" />
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                    <span className="glyphicon glyphicon-star-empty" />
                    <span className="name" style={{ minWidth: 120, display: 'inline-block' }}>
                      Jason Markus
                    </span>{' '}
                    <span className="">This is big title</span>
                    <span className="text-muted" style={{ fontSize: 11 }}>
                      - I saw that you had..
                    </span>{' '}
                    <span className="badge">12:09 AM</span>{' '}
                    <span className="pull-right">
                      <span className="glyphicon glyphicon-paperclip" />
                    </span>
                  </a>
                  <a href="#" className="list-group-item read">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" />
                      </label>
                    </div>
                    <span className="glyphicon glyphicon-star" />
                    <span className="name" style={{ minWidth: 120, display: 'inline-block' }}>
                      Jane Patel
                    </span>{' '}
                    <span className="">This is big title</span>
                    <span className="text-muted" style={{ fontSize: 11 }}>
                      - Hi hello how r u ?
                    </span>{' '}
                    <span className="badge">11:30 PM</span>{' '}
                    <span className="pull-right">
                      <span className="glyphicon glyphicon-paperclip" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="tab-pane fade in" id="profile">
                <div className="list-group">
                  <div className="list-group-item">
                    <span className="text-center">This tab is empty.</span>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade in" id="messages">
                ...
              </div>
              <div className="tab-pane fade in" id="settings">
                This tab is empty.
              </div>
            </div>

            <div className="row-md-12">
              <div className="well">
                <a href="http://www.bootply.com/XXmcPas41w">Edit on Bootply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
