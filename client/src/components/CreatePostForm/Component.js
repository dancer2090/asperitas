import React from 'react';
import { Field } from 'redux-form';
import categories from '../../categories';
import styled from 'styled-components';
import Form from '../shared/form/Form';
import Input from '../shared/form/Input';
import Button from '../shared/Button';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const StyledButtonField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
`;
const StyledTagBox = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  display: flex;
  right: 0;
  bottom: 65px;
`;

const StyledButtonAddTag = styled(Button)`
  height: 30px;
`;

const postTypes = [
  {
    label: 'link',
    value: 'link'
  },
  {
    label: 'text',
    value: 'text'
  }
];

const defaultTagsOptions = [
  {
    label: 'tag1',
    value: 'tag1'
  },
  {
    label: 'tag2',
    value: 'tag2'
  }
];

class CreatePostForm extends React.Component {
  state = {
    addTagValue: '',
    tagsOptions: defaultTagsOptions
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/a/${post.category}/${post.id}`);
  }

  onSubmit = post => this.props.attemptCreatePost(post);

  changeOptions = () => {
    const { addTagValue, tagsOptions } = this.state;
    if (addTagValue !== '') {
      const options = tagsOptions.find(t => t.label === addTagValue)
        ? tagsOptions
        : [...tagsOptions, { label: addTagValue, value: addTagValue }];
      this.setState({ tagsOptions: options, addTagValue: '' });
    }
  };

  mapCategories = () =>
    categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  render() {
    const { otherCategories } = this.props;
    const { tagsOptions, addTagValue } = this.state;
    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name='type'
          label='type'
          type='radiogroup'
          component={renderField}
          options={postTypes}
        />
        <Field
          name='category'
          label='Main Category'
          type='select'
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field
          names={otherCategories.map(c => c.name)}
          name='otherCategories'
          label='Other Categories'
          type='checkboxgroup'
          component={renderField}
          options={otherCategories}
        />
        <Field name='title' label='title' type='text' component={renderField} />
        {this.props.form.values.type === 'link' && (
          <Field name='url' label='url' type='url' component={renderField} />
        )}
        {this.props.form.values.type === 'text' && (
          <Field
            name='text'
            label='text'
            type='textarea'
            component={renderField}
          />
        )}
        <StyledButtonField>
          <Field
            name='tags'
            label='Tags'
            type='select'
            multiple
            options={tagsOptions}
            component={renderField}
          />
          <StyledTagBox>
            <Input
              value={addTagValue}
              type='text'
              onChange={e => this.setState({ addTagValue: e.target.value })}
            />
            <StyledButtonAddTag
              type='button'
              onClick={() => this.changeOptions()}
            >
              Add
            </StyledButtonAddTag>
          </StyledTagBox>
        </StyledButtonField>
        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
