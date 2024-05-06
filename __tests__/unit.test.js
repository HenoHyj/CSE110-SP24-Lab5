// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// My Test cases

// Test Phone Numbers
test('test a true phone number', () => {
  expect(isPhoneNumber('619-290-9707')).toBe(true);
});

test('test a true phone number', () => {
  expect(isPhoneNumber('(619)290-9707')).toBe(true);
});

test('test a false phone number', () => {
  expect(isPhoneNumber('123456789101112')).toBe(false);
});

test('test a false phone number', () => {
  expect(isPhoneNumber('6192909707')).toBe(false);
});

// Test Email Address
test('test a true email address', () => {
  expect(isEmail('yih047@ucsd.edu')).toBe(true);
});

test('test a true email address', () => {
  expect(isEmail('EMemB22@outlook.com')).toBe(true);
});

test('test a false email address', () => {
  expect(isEmail('definitely not an email @ somewhere.com')).toBe(false);
});

test('test a false email address', () => {
  expect(isEmail('@@..')).toBe(false);
});

// Test Strong passoword
test('test a true strong password', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('test a true strong password', () => {
  expect(isStrongPassword('Passwordbrow')).toBe(true);
});

test('test a false strong password', () => {
  expect(isStrongPassword('123pwd')).toBe(false);
});

test('test a false strong password', () => {
  expect(isStrongPassword('@@@@')).toBe(false);
});

// Test Date
test('test a true date', () => {
  expect(isDate('05/04/1919')).toBe(true);
});

test('test a true date', () => {
  expect(isDate('1/1/1453')).toBe(true);
});

test('test a false date', () => {
  expect(isDate('05041919')).toBe(false);
});

test('test a false date', () => {
  expect(isDate('IamA_Date')).toBe(false);
});

// Test Hex Color
test('test a true hex color', () => {
  expect(isHexColor('#FFFAAA')).toBe(true);
});

test('test a true hex color', () => {
  expect(isHexColor('000000')).toBe(true);
});

test('test a false hex color', () => {
  expect(isHexColor('F')).toBe(false);
});

test('test a false hex color', () => {
  expect(isHexColor('blue')).toBe(false);
});

