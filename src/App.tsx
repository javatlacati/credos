import {useCallback, useState, useEffect} from 'react'
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
    'elk.direction': 'DOWN',
    'elk.layered.spacing.nodeNodeBetweenLayers': 100,
    'elk.spacing.nodeNode': 80,
  };

  const getLayoutedElements = useCallback((options) => {
    const layoutOptions = {...defaultOptions, ...options};
    
    // Distribute child nodes within parents to avoid overlap
    const distributeChildNodes = (nodes) => {
      const parentMap = new Map();
      
      // Group children by parent
      nodes.forEach(node => {
        if (node.parentId) {
          if (!parentMap.has(node.parentId)) {
            parentMap.set(node.parentId, []);
          }
          parentMap.get(node.parentId).push(node);
        }
      });
      
      // Distribute children in a simple grid
      parentMap.forEach((children, parentId) => {
        const parent = nodes.find(n => n.id === parentId);
        const parentWidth = parent?.style?.width || 370;
        const padding = 10;
        const columns = 2;
        const colWidth = (parentWidth - padding * (columns + 1)) / columns;
        
        children.forEach((child, index) => {
          const col = index % columns;
          const row = Math.floor(index / columns);
          const childHeight = child?.style?.height || 100;
          
          child.position = {
            x: padding + col * (colWidth + padding),
            y: padding + row * (childHeight + padding)
          };
        });
      });
      
      return nodes;
    };
    
    const nodes = distributeChildNodes(getNodes());
    
    const graph = {
      id: 'root',
      layoutOptions: layoutOptions,
      children: nodes.map((node) => ({
        ...node,
        width: node.measured?.width || node.style?.width || 200,
        height: node.measured?.height || node.style?.height || 100,
      })),
      edges: getEdges(),
    };

    elk.layout(graph).then(({children}) => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      getLayoutedElements();
    }, 100);
    return () => clearTimeout(timer);
  }, [getLayoutedElements]);

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


