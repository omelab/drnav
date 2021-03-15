import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function SidebarItem({ label, children, depthStep = 10, depth = 0, ...rest }) {
    return (
      <>
        <ListItem button dense {...rest}>
          <ListItemText style={{ paddingLeft: depth * depthStep }}>
            <span>{label}</span>
          </ListItemText>
        </ListItem>
        {Array.isArray(children) ? (
          <List disablePadding dense>
            {children.map((subItem) => (
              <SidebarItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </List>
        ) : null}
      </>
    )
}
 
export default SidebarItem; 