import {memo} from 'react';
import {Handle, Position, NodeResizer, useNodeConnections, useEdges} from '@xyflow/react';

const ResizableNodeSelected = ({data, selected}) => {
  // updating related edges
  const connections = useNodeConnections({});
    const edgeIds = connections.map((connection) => connection.edgeId)
    const edges = useEdges();
    const filtmatchingNodes = edges.filter((edge) => edgeIds.includes(edge.id));
    // const represented = filtmatchingNodes.map((edge) => {
    //   return {
    //     id: edge.id, style: edge.style
    //   }
    // })
    // console.log('Related edges f: ', represented)
    filtmatchingNodes.forEach((edge) => {
      edge.selected = selected;
      edge.animated = selected;
    //   if (edge.style)
    //     edge.style.color = '#ffa071';
    });
    //end of updating related edges

    return (
      <>
        <div style={{
          borderWidth: 1,
          borderStyle: 'double',
          borderColor: '#000001',
          borderRadius: 5,
          width: '100%',
          height: '100%',
          cursor: 'pointer'
        }}>
          <NodeResizer
            color="#ff0071"
            isVisible={selected}
            minWidth={100}
            minHeight={30}
          />
          <Handle type="target" position={Position.Left}/>
          <div style={{padding: 10}}>{data.label}</div>
          <Handle type="source" position={Position.Right}/>
        </div>
      </>
    );
  }
;

export default memo(ResizableNodeSelected);