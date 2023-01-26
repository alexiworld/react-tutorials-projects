import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  // To remove the flickering effect the app passes the list
  // to the Alert component, and the list is configured as
  // 2nd parameter for the useEffect. This will result in 
  // useEffect being called 3 times instead of 2 times. Try
  // removing the 'list' as 2nd parameter of useEffect, and 
  // run the sequence of steps. You will see the 2 logs in
  // the console. Try adding the 'list' as 2nd parameter,
  // and repeat the sequence. You will see the 3 logs in the
  // console.
  // Flickering effect can be seen by adding an item, submit,
  // wait 1-2 sec, and hit remove for the added item. The 
  // 'item is removed' message (alert) will stay 1 sec, not
  // 3 sec and will disappear. With the 'list' as 2nd param
  // the 'item is removed' message will stay 3 sec.
  // My explanation of 2 vs 3 logs may not be right but it 
  // is:
  // 2 logs - during the add, the state variable alert will
  // be updated, resulting in re-rendering it and causing
  // useEffect to be invoked for 1st time. Adding the new
  // item will result in state variables list and name to
  // be updated and probably this is the cause of the 
  // second re-rendering and 2nd invocation of useEffect.
  // Prior to 2nd useEffect call, the cleanup fn of 1st
  // useEffect will be called. The 2nd useEffect will set
  // timeout in 3 sec to execute removeAlert(). Clicking 
  // the remove button 1-2 sec later will update state 
  // variables alert and list. Since useEffect's 2nd param 
  // is set to run only once during rendering and won't run 
  // again. The time out from the 2nd useEffect invocation
  // is due in 1 sec. The 'item is removed' alert will not
  // stay long and will soon disappear. 
  // 3 logs - prop drilling down of 'list' and adding it as
  // a 2nd param of useEffect will cause useEffect to be
  // called for a 3rd time when clicking on the remove btn
  // and this will cleanup the timer due to expire in 1-2
  // sec or lesser, and start a new one. This way, the msg
  // will 'item is removed' will stay long enough, 3 sec as
  // planned. 
  useEffect(() => {
    console.log(new Date(), 'useEffect');
    const timeout = setTimeout(() => {
      console.log(new Date(), 'Time has come: ', timeout);
      removeAlert();
    }, 3000) // note that we use the default values
    console.log(new Date(), 'Set timeout: ', timeout);
    return () => {
      console.log(new Date(), 'Clear timeout: ', timeout);
      clearTimeout(timeout);
    }
  }, [list]);
  return <h2 className={`alert alert-${type}`}>{msg}</h2>
}

export default Alert
