import { BasicSlide } from '@Front/Slides/BasicSlide';
import { FragmentSlide } from '@Front/Slides/FragmentSlide';
import { MarkdownSlide } from '@Front/Slides/MarkdownSlide';
import { TitleSlide } from '@Front/Slides/TitleSlide';
import { VerticalSlide } from '@Front/Slides/VerticalSlide';
import { type ComponentType } from 'react';

export const slides = [TitleSlide, BasicSlide, VerticalSlide, FragmentSlide, MarkdownSlide] as ComponentType[];
