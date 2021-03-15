import React from 'react';
import Sidebar from "./component/Sidebar";
import './App.css'


const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    children: [
      { name: 'statements', label: 'Statements' },
      { 
        name: 'reports', 
        label: 'Reports', 
        children: [
          { 
            name: 'report child 1', 
            label: 'report child 1',
            children: [
              { name: 'report child 1 > 1', label: 'report child 1 > 1' },
              { name: 'report child 1 > 2', label: 'report child 1 > 2' },
            ], 
         },
          { name: 'report child 2', label: 'report child 2' },
        ], 
      },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    children: [{ name: 'profile', label: 'Profile' }],
  },
]

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default App 
