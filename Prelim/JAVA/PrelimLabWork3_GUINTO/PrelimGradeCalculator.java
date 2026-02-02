import javax.swing.*;
import java.awt.*;

public class PrelimGradeCalculator {

    public static void main(String[] args) {
        final int TOTAL_CLASSES = 10; // change if needed

        // The main panel
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
        mainPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        // The Title
        JLabel titleLabel = new JLabel("PRELIM GRADE CALCULATOR");
        titleLabel.setFont(new Font("Arial", Font.BOLD, 18));
        titleLabel.setAlignmentX(Component.CENTER_ALIGNMENT);
        mainPanel.add(titleLabel);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 20)));

        // Missed Attendance 
        JLabel attendanceLabel = new JLabel("Number of Missed Attendances:");
        attendanceLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(attendanceLabel);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 5)));
        
        JTextField missedAttendanceField = new JTextField();
        missedAttendanceField.setMaximumSize(new Dimension(Integer.MAX_VALUE, 30));
        missedAttendanceField.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(missedAttendanceField);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 15)));

        // Lab Work 1 
        JLabel lab1Label = new JLabel("Lab Work 1 Grade (0-100):");
        lab1Label.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(lab1Label);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 5)));
        
        JTextField lab1Field = new JTextField();
        lab1Field.setMaximumSize(new Dimension(Integer.MAX_VALUE, 30));
        lab1Field.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(lab1Field);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 15)));

        // Lab Work 2 
        JLabel lab2Label = new JLabel("Lab Work 2 Grade (0-100):");
        lab2Label.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(lab2Label);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 5)));
        
        JTextField lab2Field = new JTextField();
        lab2Field.setMaximumSize(new Dimension(Integer.MAX_VALUE, 30));
        lab2Field.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(lab2Field);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 15)));

        // Lab Work 3 
        JLabel lab3Label = new JLabel("Lab Work 3 Grade (0-100):");
        lab3Label.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(lab3Label);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 5)));
        
        JTextField lab3Field = new JTextField();
        lab3Field.setMaximumSize(new Dimension(Integer.MAX_VALUE, 30));
        lab3Field.setAlignmentX(Component.LEFT_ALIGNMENT);
        mainPanel.add(lab3Field);
        mainPanel.add(Box.createRigidArea(new Dimension(0, 20)));

        // Calculate Button
        JButton calculateButton = new JButton("Calculate Required Prelim Exam Score");
        calculateButton.setAlignmentX(Component.CENTER_ALIGNMENT);
        calculateButton.setFont(new Font("Arial", Font.BOLD, 12));
        mainPanel.add(calculateButton);

        // Scroll for aesthetics and functionality :)
        JScrollPane scrollPane = new JScrollPane(mainPanel);
        scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
        scrollPane.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scrollPane.getVerticalScrollBar().setUnitIncrement(16);

        // Window
        JDialog dialog = new JDialog();
        dialog.setTitle("Prelim Grade Calculator");
        dialog.setDefaultCloseOperation(JDialog.DISPOSE_ON_CLOSE);
        dialog.add(scrollPane);
        dialog.setSize(400, 500);
        dialog.setLocationRelativeTo(null);
        dialog.setVisible(true);

        // The Calculate button 
        calculateButton.addActionListener(e -> {
            try {
                // Parse input values
                int missedAttendance = Integer.parseInt(missedAttendanceField.getText().trim());
                double lab1 = Double.parseDouble(lab1Field.getText().trim());
                double lab2 = Double.parseDouble(lab2Field.getText().trim());
                double lab3 = Double.parseDouble(lab3Field.getText().trim());

                // Input validation
                if (missedAttendance < 0 || lab1 < 0 || lab2 < 0 || lab3 < 0 ||
                    lab1 > 100 || lab2 > 100 || lab3 > 100) {

                    JOptionPane.showMessageDialog(dialog,
                            "Invalid input!\nGrades must be between 0 and 100\nAbsences cannot be negative.",
                            "Error",
                            JOptionPane.ERROR_MESSAGE);
                    return;
                }

                // Auto fail when less than three attendance because of school policy
                if (missedAttendance >= 3) {
                    JOptionPane.showMessageDialog(dialog,
                            "FAILED\n\nYou have missed 3 or more classes.\n"
                          + "Automatic failure due to attendance policy.",
                            "Result",
                            JOptionPane.ERROR_MESSAGE);
                    return;
                }

                // Compute Attendance Score from missed attendance
                double attendanceScore =
                        ((double)(TOTAL_CLASSES - missedAttendance) / TOTAL_CLASSES) * 100;

                // Compute Lab Work Average
                double labWorkAverage = (lab1 + lab2 + lab3) / 3;

                // Compute Class Standing
                double classStanding =
                        (attendanceScore * 0.40) + (labWorkAverage * 0.60);

                // Compute required Prelim Exam scores
                double requiredForPassing =
                        (75 - (classStanding * 0.30)) / 0.70;
                double requiredForExcellent =
                        (100 - (classStanding * 0.30)) / 0.70;

                // Generated result message for feeeeddback
                String result = "COMPUTATION RESULTS\n\n"
                        + "Missed Attendances: " + missedAttendance + "\n"
                        + String.format("Attendance Score: %.2f\n", attendanceScore)
                        + String.format("Lab Work Average: %.2f\n", labWorkAverage)
                        + String.format("Class Standing: %.2f\n\n", classStanding)
                        + "REQUIRED PRELIM EXAM SCORES\n"
                        + String.format("To PASS (75%%): %.2f\n", requiredForPassing)
                        + String.format("To be EXCELLENT (100%%): %.2f\n\n", requiredForExcellent)
                        + "REMARKS\n";

                if (requiredForPassing > 100) {
                    result += "• Passing is difficult. You need more than 100.\n";
                } else if (requiredForPassing < 0) {
                    result += "• You are guaranteed to pass!\n";
                } else {
                    result += String.format("• You need at least %.2f to pass.\n", requiredForPassing);
                }

                if (requiredForExcellent > 100) {
                    result += "• Excellent grade is not possible.\n";
                } else if (requiredForExcellent < 0) {
                    result += "• You already have an excellent standing!\n";
                } else {
                    result += String.format("• You need %.2f to be excellent.\n", requiredForExcellent);
                }

                // result window
                JOptionPane.showMessageDialog(dialog, result, "Results", JOptionPane.INFORMATION_MESSAGE);

            } catch (NumberFormatException ex) {
                JOptionPane.showMessageDialog(dialog,
                        "Please enter valid numbers in all fields!",
                        "Input Error",
                        JOptionPane.ERROR_MESSAGE);
            }
        });
    }
}