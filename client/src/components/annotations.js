import React from 'react';
import './annotations.css';

// should be set from an array... navigating forward or backwards should access
// a different annotation
export default function Annotations(props) {
  return (
    <textarea class="annotation_text" rows="10">{props.text}</textarea>
  );
}