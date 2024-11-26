interface TestProps {
	show: boolean;
	visible: boolean;
	questions: LinkedQuestion[];
	firstQuestionId?: number;
	onComplete: (results: any) => void;
	setScore: (score: number) => void;
}

export interface TestQuestion {
	id: number;
	created_at: string;
	updated_at: string;
	number: number;
	is_last_question: boolean;
	step_type: string;
	next_question_if_successed: number;
	next_question_if_failed: number;
	skills: number[];
}

export interface Question {
	id: number;
	question: string;
	type: string;
	display: string;
	answer: number[];
	choices: Choice[];
}

export interface LinkedQuestion extends Question, TestQuestion {}

export interface Choice {
	id: number;
	text: string;
	image?: string;
}
