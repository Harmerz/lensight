export const QuestionDetail = [
  {
    title: 'Question 1',
    question: 'Tell us exactly the amount needed?',
    example: '125000',
    description:
      "To better understand your lending needs, please specify the exact amount you'e looking to borrow. This helps us match you with suitable lending options.",
  },
  {
    title: 'Question 2',
    question: 'Tell us your exact needs?',
    example: 'I intend to use the funds to purchase...',
    description:
      'Please provide details on how you plan to use the borrowed funds. Understanding your specific needs allows us to recommend the most appropriate lending solutions.',
  },
  {
    title: 'Question 3',
    question: 'Set a maximum interest rate?',
    example: '6%',
    description:
      "Specify the highest interest rate you're willing to accept for your loan. This helps us tailor lending options that align with your preferences.",
  },
  {
    title: 'Question 4',
    question: 'Do you know your credit score right now ?',
    description:
      "Understanding your current credit score helps us provide more accurate lending recommendations. If you're unsure, that's okay too.",
    childern: {
      yes: {
        question: 'Please, type what is your credit score right now',
        example: '720',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.',
      },
      no: {
        question: 'Check your credit score right now',
        description: (
          <>
            To check your credit score, visit{' '}
            <a href="https://idebku.ojk.go.id">
              <span className=" text-blue-800 underline">idebku.ojk.go.id</span>
            </a>{' '}
            and follow the instructions provided on the platform. Next please type what is your
            credit score right now!
          </>
        ),
      },
    },
  },
  {
    title: 'Question 5',
    question: 'Do you have any Income Statement or any Financial Report? Upload it!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.',
  },
  {
    title: 'Question 6',
    question: 'Tell us your story!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.',
  },
]

export const Question = [
  {
    title: 'Question 1',
    description: 'Amount Needed',
  },
  {
    title: 'Question 2',
    description: 'Exact needs?',
  },
  {
    title: 'Question 3',
    description: 'Max interest rate?',
  },
  {
    title: 'Question 4',
    description: 'Credit score?',
  },
  {
    title: 'Question 5',
    description: 'Income statement?',
  },
  {
    title: 'Question 6',
    description: 'Your story?',
  },
]

export const Result = [
  {
    title: 'Result 1',
    description: 'Choose a place',
  },
  {
    title: 'Result 2',
    description: 'Place requirement',
  },
  {
    title: 'Result 3',
    description: 'Fill our template form',
  },
  {
    title: 'Result 4',
    description: 'Chosen place direction',
  },
]

export const Register = [
  {
    title: 'Personal Information',
  },
  {
    title: 'Education and Occupation Information',
  },
  {
    title: 'Business and Financial Information',
  },
  {
    title: 'Photo and Financial Report Documents',
  },
]
