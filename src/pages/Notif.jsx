const Notif = () => {
    return(
<div className="Start">
<div className="alert simple-alert">
  <h3>Simple Alert Message</h3>
  <a className="close">&times;</a>
</div>

<div className="alert success-alert">
  <h3>Success Alert Message</h3>
  <a className="close">&times;</a>
</div>

<div className="alert danger-alert">
  <h3>Danger Alert Message</h3>
  <a className="close">&times;</a>
</div>

<div className="alert warning-alert">
  <h3>Warning Alert Message</h3>
  <a className="close">&times;</a>
</div>
</div>
    )
}

export default Notif