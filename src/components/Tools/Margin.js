import React, { useEffect, useState } from 'react'

export default function Margin({direction, px}) {
    const [margin, setMargin] = useState({})

    useEffect(() => {
        switch (direction) {
            case 't':
              setMargin({marginTop: px + 'px'});
              break;
            case 'b':
              setMargin({marginBottom: px + 'px'});
              break;
            case 'r':
              setMargin({marginRight: px + 'px'});
              break;
            case 'l':
              setMargin({marginLeft: px + 'px'});  
              break;
            default:
              break;
        }
    }, [])

  return (
    <div style={margin}/>
  )
}
