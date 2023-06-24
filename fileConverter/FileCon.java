package fileConverter;

import java.io.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;

// Main class
public class FileCon{

	// Method 1
	// To convert file to byte array
	public static byte[] method(File file)
		throws IOException
	{

		// Creating an object of FileInputStream to
		// read from a file
		FileInputStream fl = new FileInputStream(file);

		// Now creating byte array of same length as file
		byte[] arr = new byte[(int)file.length()];

		// Reading file content to byte array
		// using standard read() method
		fl.read(arr);

		// lastly closing an instance of file input stream
		// to avoid memory leakage
		fl.close();

		// Returning above byte array
		return arr;
	}

	// Method 2
	// Main driver method
	public static void main(String[] args)
		throws IOException
	{

		// Creating an object of File class and
		// providing local directory path of a file
		File path = new File(
			// "/Users/mayanksolanki/Desktop/demo.rtf");
			"C:\\Users\\91870\\eclipse-workspace\\JavaProject\\src\\image\\anand.jpg");

		// Calling the Method1 in main() to
		// convert file to byte array
		byte[] array = method(path);

		// Printing the byte array
		System.out.print(Arrays.toString(array));
	}
}


