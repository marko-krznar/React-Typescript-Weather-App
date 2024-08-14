/**
 * Converts a Unix timestamp to a formatted time string (HH:MM).
 * @param timestamp - Unix timestamp in seconds.
 * @returns Formatted time string in HH:MM format.
 */
export const formatTimestampToHours = (timestamp: number): string => {
	const date = new Date(timestamp * 1000);
	const hours = date.getHours(); // Local time
	const minutes = date.getMinutes();
	const formattedHours = hours.toString().padStart(2, "0");
	const formattedMinutes = minutes.toString().padStart(2, "0");

	return `${formattedHours}:${formattedMinutes}`;
};
