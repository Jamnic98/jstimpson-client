import { LinkType, ProjectDataType } from 'types'

const blueCheeseClassifier: ProjectDataType = {
	id: 'blue-cheese-classifier',
	title: 'Blue Cheese Classifier',
	summary: 'An image classifier designed to identify blue cheese.',
	paragraphs: [
		`For the intermediate machine learning (ML) course I enrolled in, we were given the option of creating one of three projects related to ML;
     big data, image classification, or time series. I chose to make an image classifier as the subject appealed to me the most.`,
		`
    I wanted to know if I could train a model to distinguish between blue cheese and regular cheese, mainly because I wanted to see if
    I could train the model to recognise the characteristics of blue cheese and correctly identify mouldy cheese (cheese that had turned bad) as regular cheese,
    since blue cheese is also mouldy but is intentionally made to be that way.`,
		`
    I created a convolutional neural network using the keras Python library and trained it on a set of roughly 4000 images of different varieties of cheese, which I
    pulled from google images using a web scraper. The first model worked well and had an accuracy score of 87%. As a large portion of the images were not just of cheese
    and had other objects in them, I decided to crop around the cheese so that the image was focused on the cheese, hoping that would increase the accuracy.
    `,
		`With close to 4000 images, cropping each image manually would have been a rather tedious, so I employed the help of a previously trained image classifier, which had (among other things)
     been trained on images of cheese. I wrote a Python script which used the pre-trained model to generate co-ordinates of the bounding box of each cheese in each image, then calculate 
     the center point of the cheese, crop around that point and save the cropped image. With the updated image set, I trained the model again, which resulted in a 6% increase in the accuracy score.`,
	],
	projectPageURI: '/projects/blue-cheese-classifier',
	screenshotURIs: [
		'/images/projects/blue-cheese-classifier-image-classification.jpeg',
		'/images/projects/blue-cheese-classifier-results-graph.png',
	],
	mainLanguage: 'Python',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/blue-cheese-classifier',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'Matplotlib', 'NumPy', 'scikit-learn'],
}

export default blueCheeseClassifier
