import React from 'react';
/*testing some shit*/ 
class Accordion extends React.Component {
    static defaultProps = {
         sections: [] 
        };

    state = {
        activeIndex: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeIndex: sectionIndex })
    }

    renderListItem(section, index, activeIndex) {
        return (
            <li className='Accordion_item' key={index}>
                <button type='button' onClick={() => this.handleSetActiveSection(index)}>
                    {section.title}
                </button>
                {(activeIndex === index) && <p>{section.content}</p>}
            </li>
        )       
    }

    render() {
        const { activeIndex } = this.state
        const { sections } = this.props
        return (
            <ul className="Accordion">
                {sections.map((section, index) =>
                this.renderListItem(section, index, activeIndex)
                )}
            </ul>
        )
    }
}
export default Accordion;