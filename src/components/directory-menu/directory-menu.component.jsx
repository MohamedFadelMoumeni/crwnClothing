import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import DirectoryMenuContainer from './directory-menu.styles';
import { connect } from 'react-redux';
import { selectSectionData } from '../../redux/section_data/section_data.selector';


class DirectoryMenu extends Component {

    render() {

        const { sections } = this.props;


        return (
            <DirectoryMenuContainer>
                {
                    sections.map((section) => (
                        < MenuItem section={section} key={section.id} />
                    ))
                }

            </DirectoryMenuContainer>
        )
    }
}

const mapStateToProps = state => ({
    sections: selectSectionData(state)
})


export default connect(mapStateToProps)(DirectoryMenu);