import {useCallback, useState} from 'react'
import './App.css'
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Controls,
  Background,
  useReactFlow,
  Panel, ReactFlowProvider
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ELK from 'elkjs/lib/elk.bundled.js';
import SelectionDisplay from "./SelectionDisplay.tsx";
import ResizableNodeSelected from "./ResizableNodeSelected.tsx";
import {initialNodes, initialEdges} from './dataset';


const elk = new ELK();

const useLayoutedElements = () => {
  const {getNodes, setNodes, getEdges, fitView} = useReactFlow();
  const defaultOptions = {
    'elk.algorithm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': 100,
    'elk.spacing.nodeNode': 80,
  };

  const getLayoutedElements = useCallback((options) => {
    const layoutOptions = {...defaultOptions, ...options};
    const graph = {
      id: 'root',
      layoutOptions: layoutOptions,
      children: getNodes().map((node) => ({
        ...node,
        width: node.measured.width,
        height: node.measured.height,
      })),
      edges: getEdges(),
    };

    elk.layout(graph).then(({children}) => {
      // By mutating the children in-place we saves ourselves from creating a
      // needless copy of the nodes array.
      children.forEach((node) => {
        node.position = {x: node.x, y: node.y};
      });

      setNodes(children);
      fitView();
    });
  }, []);

  return {getLayoutedElements};
};

function LayoutFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);


  const {getLayoutedElements} = useLayoutedElements();

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <>
      <div style={{width: '100vw', height: '90vh'}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={{ResizableNodeSelected}}
          fitView
          multiSelectionKeyCode={null}
        >
          <Background/>
          <Controls/>
          <Panel position="top-right">
            <button
              onClick={() =>
                getLayoutedElements({
                  'elk.algorithm': 'layered',
                  'elk.direction': 'DOWN',
                })
              }
            >
              vertical layout
            </button>
            <button
              onClick={() =>
                getLayoutedElements({
                  'elk.algorithm': 'layered',
                  'elk.direction': 'RIGHT',
                })
              }
            >
              horizontal layout
            </button>
            <button
              onClick={() =>
                getLayoutedElements({
                  'elk.algorithm': 'org.eclipse.elk.radial',
                })
              }
            >
              radial layout
            </button>
            <button
              onClick={() =>
                getLayoutedElements({
                  'elk.algorithm': 'org.eclipse.elk.force',
                })
              }
            >
              force layout
            </button>
          </Panel>
        </ReactFlow>
      </div>
    </>
  )
}


export default function App() {
  return (
    <ReactFlowProvider>
      <LayoutFlow/>
      <SelectionDisplay/>
    </ReactFlowProvider>
  );
}


