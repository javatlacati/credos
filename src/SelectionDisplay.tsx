import {useCallback, useState} from 'react';
import {useOnSelectionChange} from '@xyflow/react';

export default function SelectionDisplay() {
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedNodePosition, setSelectedNodePosition] = useState({x: 0, y: 0});
  const [selectedNodeSize, setSelectedNodeSize] = useState({width: 0, height: 0});

  // the passed handler has to be memoized, otherwise the hook will not work correctly
  const onChange = useCallback(({nodes}) => {
    setSelectedNodes(nodes.map((node) => node.data.note || 'sin información'));
    setSelectedNodePosition(nodes.map((node) => node.position)[0] || {x: 0, y: 0});
    setSelectedNodeSize(nodes.map((node) => {
      return ({
        width: node.style?.width,
        height: node.style?.height
      })
    })[0] || {width: 0, height: 0});
  }, []);

  useOnSelectionChange({
    onChange,
  });

  return (
    <div>
      <p>{selectedNodes}</p><br/>
      <p>Position: (${selectedNodePosition.x}, {selectedNodePosition.y})</p>
      <p>Size: (${selectedNodeSize.width} px, {selectedNodeSize.height} px)</p>
    </div>
  );
}