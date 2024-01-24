import React, { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Addresponseblock from '../components/Addresponseblock';
import Renames from '../components/Renames';
import TextBlocks from '../components/TextBlocks';
import SaveTemplate from '../components/SaveTemplate';
import ListBlock from '../components/ListBlock';
import { Appcontext } from '../context/Createcontext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SettingBar from '../components/SettingBar';
import { useDispatch, useSelector } from 'react-redux';
import { addTextBlock, addResBlock, addListBlock } from '../redux/CreateTectBlock';
import { v4 as uuidv4 } from 'uuid';


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const NewProjects = ({ id }) => {


  const { listBlocks, textBlocks, resBlocks } = useSelector((state) => state.TextBlock);
  const { savetmpl, setSavetmpl, setSettinBar, resblockwdt } = useContext(Appcontext);
  const Dispatch = useDispatch();

  const runtamplates = () => {
    if (savetmpl) {
      setSavetmpl(false);
    } else {
      setSavetmpl(true);
      setSettinBar(false);
    }
  };


  const addTextBloclkFunc = () => {
    const newTextblock = {
      id: `${uuidv4()}`,
      label: 'Enter your prompt here',
      type: 'TEXT',
      timestamp: Date.now(),
    };
    setItems(prevItems => [newTextblock, ...prevItems]);
    Dispatch(addTextBlock(newTextblock));
  };

  const addListBlockFunc = () => {
    const newList = {
      id: `${uuidv4()}`,
      list: [
        { label: ' 1.	List Block Item' },
        { label: ' 2.	List Block Item' },
        { label: ' 3.	List Block Item' },
      ],
      type: "LIST",
      timestamp: Date.now(),
    };
    setItems(prevItems => [newList, ...prevItems]);
    Dispatch(addListBlock(newList));
  };

  const addResponseBlockFunc = () => {
    const newResponse = {
      id: `${uuidv4()}`,
      label: ' To generate a response open prompt settings window.',
      type: 'RESPONSE',
      timestamp: Date.now(),
    };
    setItems(prevItems => [newResponse, ...prevItems]);
    Dispatch(addResBlock(newResponse));
  };



  useEffect(() => {
    const newData = [
      ...listBlocks.map(item => ({
        id: item.id,
        list: item.list || [],
        label: item.label,
        type: item.type,
        timestamp: item.timestamp,
      })),
      ...textBlocks.map(item => ({
        id: item.id,
        label: item.label,
        type: item.type,
        timestamp: item.timestamp,
      })),
      ...resBlocks.map(item => ({
        id: item.id,
        label: item.label,
        type: item.type,
        timestamp: item.timestamp,
      })),
    ];

    // Sort newData based on timestamp in descending order
    newData.sort((a, b) => b.timestamp - a.timestamp);

    setItems(newData);
  }, [listBlocks, textBlocks, resBlocks]);

  const [items, setItems] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(reorderedItems);
  };
  const [isResizing, setResizing] = useState(false);
  return (
    <>
      <div className={`New_projectS${id}`}>
        <SaveTemplate />
        <SettingBar />
        <section className='min_sections'>
            <div className="project_header_div">
              <div>
                <Renames storageKey={`project_name${id}`} blockId={id} defultName={"New Project"} />
                <div className="header_btn_divs btn2_headr">
                  <Button variant="outlined" className='outlinedbtns' onClick={addTextBloclkFunc}>Add Text Block</Button>
                  <Button variant="outlined" className='outlinedbtns' onClick={addResponseBlockFunc}> Add response block </Button>
                  <Button variant="outlined" className='outlinedbtns' onClick={addListBlockFunc}>Add List Block</Button>
                </div>
              </div>
              <div className="header_btn_divs">
                <Button variant="outlined" className='outlinedbtns' onClick={runtamplates}>Sequence</Button>
                <Button variant="contained" style={{ background: '#1F4D77' }}>
                  Save Template
                </Button>
              </div>
            </div>
          <div className="main_new_Project_div">
            <div className="Respons_Block_div" style={{ width: resblockwdt ? '96vw' : 'calc(100vw - 312px)' }}>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}>
                      {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                            className={`card ${isResizing ? 'no-drag' : ''}`}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...(!isResizing && provided.dragHandleProps)}
                            onMouseDown={() => setResizing(true)}
                            onMouseUp={() => setResizing(false)}
                            >
                              <div>
                                {(() => {
                                  switch (item.type) {
                                    case 'LIST':
                                      return <ListBlock list={item?.type === 'LIST' ? item : []} key={item?.type === 'LIST' ? item?.id : null} />
                                    case 'RESPONSE':
                                      return <Addresponseblock res={item?.type === 'RESPONSE' ? item : []} key={item?.type === 'RESPONSE' ? item?.id : null} />;
                                    case 'TEXT':
                                      return <TextBlocks text={item?.type === 'TEXT' ? item : []} key={item?.type === 'TEXT' ? item?.id : null} />;
                                    default:
                                      return null;
                                  }
                                })()}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default NewProjects;
