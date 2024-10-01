import { CreateQuizQuestionOptionDto } from "@App/modules/quiz-question-option/dto/create-quiz-question-option.dto";
import { QuizSociologicalData } from "@App/modules/quiz-sociological-data/entities/quiz-sociological-data.entity";
import { QuizAudioData } from "@App/modules/shared/types/quiz-audio-data.interface";
import { QuizImageData } from "@App/modules/shared/types/quiz-image-data.interface";
import { QuizSociologicalOptionData } from "@App/modules/shared/types/quiz-social-option-data";
import { User } from "@App/modules/user/entities/user.entity";
import { Type } from "class-transformer";

// Main Quiz Response DTO
export class DetailedQuizResponseDto {
  index: number;
  title: string;
  identifier: string;
  type: string;
  description: string;
  image: QuizImageData | null;
  audio: QuizImageData | null; // Assuming audio is similar to image data structure
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  owner: User; // Owner of the quiz
  sociologicalData: QuizSociologicalData[]; // Quiz-level sociological data
  questions: DetailedQuizQuestionDto[]; // List of questions with options
}

class DetailedQuizQuestionDto {
  type: string;
  question?: string;
  answer?: string;
  image?: QuizImageData;
  audio?: QuizAudioData;
  options?: DetailedQuizQuestionOptionDto[];
}

class DetailedQuizQuestionOptionDto {
  title: string;
  isChecked: boolean;
  weight?: number;
  sociological?: QuizSociologicalOptionData;
  sociologicalId: number;
  image?: QuizImageData;
}