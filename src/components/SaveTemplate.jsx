import React, { useContext, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton,Button } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CodeIcon from '@mui/icons-material/Code';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { Appcontext } from '../context/Createcontext';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";





const data = [
    {
        id: 'item-1',
        name: "Services",
        run: <><CheckCircleOutlinedIcon /></>,
        check: "done"
    },
    {
        id: 'item-2',
        name: "Introduction",
        run: <><CircularProgress /></>,
        check: "progress"
    },
    {
        id: 'item-3',
        name: "Testimonials",
        run: <><CancelOutlinedIcon /></>,
        check: "not"
    },
]



const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "white" : "transparent",
    borderRadius: '5px',
    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
    width: '100%',
    // backgroundColor: isDraggingOver ? 'red':'#FFFFFF1A'
});


const SaveTemplate = () => {

    const { savetmpl, setSavetmpl } = useContext(Appcontext)
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, []);

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


    return (
        <>
            <div className="main_save_template_div" style={{ right: savetmpl ? '0' : '-280px' }}>
                <div className="title_bars">
                    <h1>Sequence</h1>
                    <IconButton onClick={() => setSavetmpl(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <p>Arrange the order of the below tiles for processing sequence.</p>
                <div className="main_save_div">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {items.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    className="intro_div"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >
                                                    <div className='saving'>
                                                        <CodeIcon />
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                    <div className={`${item.check === 'not' ? 'cancel_svg ' : 'svg_save_div'}`}>
                                                        {item.run}
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


                <Button variant="contained" className='btn_Run_save'>
                    Run Sequence
                </Button>
            </div>
        </>
    )
}

export default SaveTemplate


